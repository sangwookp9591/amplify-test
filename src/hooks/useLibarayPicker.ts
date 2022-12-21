import {useState} from "react";
import {ImagePickerResponse, MediaType, Asset} from "react-native-image-picker";
import {launchImageLibrary} from "react-native-image-picker";

type ImagePickerOption = {
  mediaType: MediaType;
  selectionLimit: number;
};

type PickerOptions = {
  selectionLimit: number;
  mediaType: MediaType;
};

export const useLibarayPicker = () => {
  const [pickedVideo, setPickedVideo] = useState<Asset>();

  const openLibaray = async ({selectionLimit, mediaType}: PickerOptions) => {
    const options: ImagePickerOption = {
      mediaType: mediaType,
      selectionLimit: selectionLimit, //picker 갯수 제한
    };

    const pickedResult: ImagePickerResponse | void = await launchImageLibrary(
      options,
    )
      .then(res => res)
      .catch(error => {
        console.log("====================================");
        console.error("[ ImagePicker Error ] : ", error.message);
        console.log("====================================");
      });

    console.log("pickedResult : ", pickedResult);

    const videoAssets = pickedResult?.assets;
    console.log("videoAssets : ", videoAssets);

    videoAssets && setPickedVideo(videoAssets[0]);
    // return videoAssets[0];
  };

  return {
    pickedVideo,
    openLibaray,
  };
};

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// // Amazon Cognito 인증 공급자를 초기화합니다
// AWS.config.region = 'ap-northeast-2'; // 리전
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'ap-northeast-2:e8c11697-c95a-410a-aad1-1b41c7727706',
// });

import {DataStore, API, graphqlOperation} from "aws-amplify";
import React, {useEffect, useState} from "react";
import {Amplify, Storage, Auth} from "aws-amplify";
import Video from "react-native-video";
import awsmobile from "./src/aws-exports";
import MediaMeta from "react-native-media-meta";

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from "react-native";
import {Category, Gender, S3Object, Todo} from "./src/models";
import uuid from "react-native-uuid";

import {JSHash, JSHmac, CONSTANTS} from "react-native-hash";

const hashAlgorithm = CONSTANTS.HashAlgorithms.sha256;

const hmacAlgorithm = CONSTANTS.HmacAlgorithms.HmacSHA512;

const EventName = CONSTANTS.Events.onBatchReccieved;

import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

// Storage.configure({
//   customPrefix: {
//     public: "myPublicPrefix/",
//     protected: "myProtectedPrefix/",
//     private: "myPrivatePrefix/",
//   },
// });

// const customPrefix = {
//   public: 'myPublicPrefix/',
//   protected: 'myProtectedPrefix/',
//   private: 'myPrivatePrefix/'
// };

// Storage.put('test.txt', 'Hello', {
//   customPrefix: customPrefix,
//   // ...
// })
// .then (result => console.log(result))
// .catch(err => console.log(err));
Storage.configure({level: "private"});

import {useLibarayPicker} from "./src/hooks/useLibarayPicker";
import {createUser, createVideo} from "./src/graphql/mutations";
import {getVideo, listVideos} from "./src/graphql/queries";

const App = () => {
  const {pickedVideo, openLibaray} = useLibarayPicker();

  const [todo, setTodo] = useState<Todo>();
  const [list, setList] = useState<any[]>();
  const [queryTodo, setQueryTodo] = useState<Todo>();
  const [searchVideo, setSearchVideo] = useState<string>();
  const initData = {
    name: "test name 1",
    description: "test Description 1",
    isComplete: true,
  };

  const fetchImageUrl = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();
    console.log("blob : ", blob);

    return blob;
  };

  const pickImage = () => {
    const data = openLibaray({selectionLimit: 1, mediaType: "video"});

    console.log("data : ", data);
  };

  const addVideoToDB = async video => {
    console.log("addVideoToDB");
    try {
      const createVideoResult = await API.graphql(
        graphqlOperation(createVideo, {input: video}),
      );
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const uploadFile = async file => {
    console.log("file.uri : ", file.uri);

    const blobContent = await fetchImageUrl(file.uri);

    const uuidv4 = uuid.v4();
    const fileName = `${uuidv4}-${file.fileName}`;
    const SSECustomerKeyMD5 = "yogigage";
    return Storage.put(fileName, blobContent, {
      // level: "private",
      contentType: file.type,
      // SSECustomerKeyMD5,
      progressCallback(uploadProgress) {
        console.log(
          "PROGRESS -- ",
          uploadProgress.loaded + "/" + uploadProgress.total,
        );
      },
      completeCallback: event => {
        console.log(`Successfully uploaded ${event.key}`);
      },
      errorCallback: err => {
        console.error("Unexpected error while uploading", err);
      },
    })
      .then(res => {
        Storage.get(res.key)
          .then(result => {
            console.log("RESULT -- : ", result);

            const video = {
              name: fileName,
              file: {
                bucket: awsmobile.aws_user_files_s3_bucket,
                region: awsmobile.aws_user_files_s3_bucket_region,
                key: "private/" + fileName,
              },
              uri: result,
            };
            addVideoToDB(video);
            return result;
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(e => {
        console.log(e);
      });
  };

  // useEffect(() => {
  //   console.log("uploadFile  : ", pickedVideo);
  //   if (pickedVideo) {
  //     const uploadResult = uploadFile(pickedVideo);
  //     console.log("uploadResult : ", uploadResult);
  //   }
  // }, [pickedVideo]);
  useEffect(() => {
    console.log("uploadFile  : ", pickedVideo);

    const fn = async () => {
      const blobContent = await fetchImageUrl(pickedVideo.uri);
      console.log("blobContent : ", blobContent); //'9E23226A-F9BD-472B-BCBA-82362711BB1B', 'ABA704C8-255B-42B4-967D-FBD56C3BED03',
    };
    if (pickedVideo) {
      const uri = pickedVideo.uri.replace("file://", "");
      console.log("uri : ", uri);
      fn();
      // JSHash(blobContent,  CONSTANTS.HashAlgorithms.md5)
      // .then(hash => console.log(hash))
      // .catch(e => console.log(e));
    }
  }, [pickedVideo]);

  const getLists = async () => {
    const result: any = await Storage.list("", {level: "private"}) // for listing ALL files without prefix, pass '' instead
      .then(result => result)
      .catch(err => console.log(err));

    /**
     * {
  results: [
    {
      eTag: ""30074401292215403a42b0739f3b5262"",
      key: "123.png",
      lastModified: "Thu Oct 08 2020 23:59:31 GMT+0800 (Singapore Standard Time)",
      size: 138256
    },
    // ...
  ],
  hasNextToken: false
    } */
    console.log("result ", result);

    console.log("resultssss : ", result?.results);
    console.log("resultssss [0] : ", result?.results[0]);

    setList(result?.results);
  };

  const onSave = async () => {
    try {
      const result: Todo = await DataStore.save(new Todo(initData)).then(
        res => res,
      );
      console.log("result : ", result);

      setTodo(result);
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
  };

  const onQuery = async () => {
    const result = await DataStore.query(Todo, todo.id);
    setQueryTodo(result);
  };

  const removeFile = async () => {
    console.log("list key : ", list[0].key);

    const removeResult = await Storage.remove(list[0].key);
    console.log("removeResult : ", removeResult);
  };

  const getVideoFile = async key => {
    // const video = await Storage.get(key);
    const video = await API.graphql(graphqlOperation(getVideo, {input: key}));
    console.log("result video : ", video);
    setSearchVideo(video);
  };

  const getVideoFile2 = async key => {
    const video = await API.graphql(graphqlOperation(listVideos));
    console.log("video : ", video?.data?.listVideos?.items);
    setList(video?.data?.listVideos?.items);
  };

  const clearList = () => {
    setList([]);
  };

  async function signUp() {
    try {
      const {user} = await Auth.signUp({
        username: "def",
        password: "Qkrxown!306",
        attributes: {
          email: "sangwookp9591@gmail.com", // optional
          // phone_number: "01095911118", // optional - E.164 number convention
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log("Success Singin Up : ", user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async function resendConfirmationCode(username) {
    try {
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }
  async function confirmSignUp(username, code) {
    try {
      const confirmResult = await Auth.confirmSignUp(username, code);
      console.log("confirmResult : ", confirmResult);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  async function signIn() {
    try {
      const user = await Auth.signIn("abc", "Qkrxown!306");
      console.log("signin user : ", user);
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  const onSaveUser = async () => {
    const user = {
      name: "가자구",
      age: 20,
      gender: Gender.MALE,
      // phone: "010-9591-1118",
      instagram: "stargo",
      email: "gogo@naver.com",
      shortsCount: "0",
      followerCount: "0",
      latitude: "0",
      // Avater: {},
      longitude: "0",
      category: Category.BEER,
      isShop: true,
      isPro: false,
      isTerm: false,
      isPrivacy: false,
      isPush: false,
      isWifi: false,
      businessNumber: "22222",
    };
    try {
      const createUserResult = await API.graphql(
        graphqlOperation(createUser, {input: user}),
      );
      console.log("createUserResult : ", createUserResult);
    } catch (error) {
      console.log("error : ", error);
    }
  };
  // const post = await DataStore.query(Post, "YOUR_POST_ID");

  // const toDelete = await DataStore.query(Post, "123");
  // DataStore.delete(toDelete);
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          onPress={onSaveUser}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>save User</Text>
        </Pressable>
        <Pressable
          onPress={onSave}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>save Todo</Text>
        </Pressable>
        <Pressable
          onPress={onQuery}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>save Todo</Text>
        </Pressable>
        <Pressable
          onPress={pickImage}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>get Picker</Text>
        </Pressable>
        <Pressable
          onPress={getLists}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>get List</Text>
        </Pressable>

        <Pressable
          onPress={removeFile}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>remove file</Text>
        </Pressable>
        <Pressable
          onPress={clearList}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>clear list</Text>
        </Pressable>
        <Pressable
          onPress={getVideoFile2}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>videl file 2</Text>
        </Pressable>

        <Pressable
          onPress={signUp}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>Sign Up</Text>
        </Pressable>

        <Pressable
          onPress={() => confirmSignUp("def", "537382")}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>Confirm Sign Up</Text>
        </Pressable>
        <Pressable
          onPress={signIn}
          style={{backgroundColor: "white", width: 100, height: 50}}>
          <Text>Sign IN</Text>
        </Pressable>
        <Text style={{color: "white"}}>{queryTodo?.id}</Text>
        {list &&
          list.map(item => {
            // console.log("list[0].uri :", list[4].uri);

            return (
              <Pressable
                style={{backgroundColor: "pink", height: 30, margin: 2}}
                onPress={() => getVideoFile(item.id)}>
                <Text key={item.name} style={{color: "white"}}>
                  {item.name}
                  {/* <Image source={{uri:}}></Image> */}
                </Text>
              </Pressable>
            );
          })}
        {list && (
          <Video
            source={{
              uri: "https://yogigagetestaca0555578ca45a99f59fdf54341bb0733022-staging.s3.ap-northeast-2.amazonaws.com/private/ap-northeast-2%3Aa04e5325-0774-4c59-9694-a2cf22350909/4edb52bc-2e9c-40bd-9ab6-2a760998a842-IMG_0012.mov?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXZIKAI3JKF4FH6ZK%2F20221214%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20221214T052018Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAOQ1vzyOFtvyBfXDaj6HuKN8dD4tWPUWmyOdJtr74WeNAiEAkWU7cwiOqIs8V4NsrlqMRZD3o2TOzOr6i6%2FvceETmm4q6wQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MzUyODEyODg5MTQiDIcsmgzK7WOCtGAgGSq%2FBE1D7iEbs7x2NILmf7cSUzl7vuHe0b3EIYuxQvmaM5tf3OhsmNe50PDzdlgszyBwUeE6aABzdTpsJ4ZDbBF50FnzXAybouVw1YfRkDy%2BLwOo84WKRbFZ3fCvPoCub9JAiyYn7FkhFzsaxOqlGrdp84Qx8OAQsY1XsX6nCrGGN8TKfm90TYGTHacVoOZn%2BTOEkunfibaOO2DVNyrRxlEmeGPNE3jYOFaopS3fEtJMYMszWpubyutsyPx4BHtDM7Q46e1vBgLJsevHcvrccm1Ay58Ega03uxQP7Asi7HJ6FB6SGhpJhZs1DQC09FBVqhvpssz%2Fwv874h%2B3Nel%2Bgq1TKRn%2Bb1yrK86c2MP0IcZPQ5g69cBhKBQ6oD5Hn4NBeXS5ibEexrww1yJlAKzldPRK6iNB2MD%2FZorZkOozjsnI0%2FEZaKu9s3kY4sKqCYyi9ihe8%2FsI%2BORh5Xv1kWlsW2GauQH%2FW3Y8RDzlAhWTNKkiS577tOGzX0kW1JOXSu7XhdbPgArw6OWcA9Q%2B50DGnwDISIkEQThPYV17fuptLeg7aUX3i%2BbUEUiGjqPvtOjgJAr0sBNQSKr%2FvvDQLHbF5a76R2Lwf3BiwSc%2F6pHIHuOiBl%2Bw0nAiY5xC8k6luwDF7a%2BFCJiOHcZcG%2FTQivZmhbfeQmBPh4IoSHtWLeuWrI%2B0RXq25LoCTCX7OHKS2aUi1q3a%2B4s18HSvoS5eWpCnN6UdIxAbaK7Dq4rCHNErx4p%2F%2Bc0xhJ%2BNiRNp1Sr3TMRelw4fMKK25ZwGOoQC7RjOnhWnxChOP9xSQl3oB%2B7ZVyu2He%2F7h%2BX%2FZ1sYhsbZA6A67gp35iti4%2Bnh0crgw9ZsxBKugzGSm88M4mLaUYq5RFxXX8tbKD7QIfOSG5ydoYuhYnW5mxMtGjZ5uHE6tddSJVxMyK0Wf%2BbnMzr42swH4wurrUZH6cKE%2Ban%2Fktvy4fkZIFiY8qiyhRa8mHrhExeNQ1C1MHzILL1Sae5Sr8FJqaUel0C8G4EQjSTulLQQZC7kLka7R%2FSYBV9kZiOelUmAZsHWEBpwS%2BJMKViRKH31V%2FdvI7MNLiRzbggNedoEQoxHXcSzmckM2kX5vJi4bt7T6YSO4EiFLHWyk%2B7ksG3I04c%3D&X-Amz-Signature=14f2740da665a258fa567ac54d1f49a5c4f707561984d44d96649c151b696ea0&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2Fother%20lang%2Fjs%20md%2Fbrowser%2Funknown_unknown%20api%2Fs3%2F3.6.1%20aws-amplify%2F5.0.4_react-native&x-id=GetObject",
              // uri: list[1].uri,
            }} // Can be a URL or a local file.
            ref={ref => {}} // Store reference
            style={{width: 200, height: 300, backgroundColor: "white"}}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

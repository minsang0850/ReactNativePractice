/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';


class App extends Component{
  render(){
    return(
      <View style= {styles.container}>
          <View>
            <Image source={require('./Images/Mizz_cherry_blossom.jpg')} style={{width:200, height:200}}/>
          </View>
          <View>
            <View style ={{flexDirection: 'row'}}>
              <Text style={styles.title}>이름</Text>
              <Text style={styles.detail}>미쯔(Mizz)</Text>
            </View>
            <View style ={{flexDirection: 'row'}}>
              <Text style={styles.title}>생년월일</Text>
              <Text style={styles.detail}>2015.09.20</Text>
            </View>
            <View style ={{flexDirection: 'row'}}>
              <Text style={styles.title}>특징</Text>
              <Text style={styles.detail}>혀를 숨길 수 없음</Text>
            </View>
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({  //이 부분 형식은 고정
  /* 원하는 스타일 포맷을 만듦 */
  container:{     //Format 1
    marginTop:50,   //위에서 거리
    marginLeft:20, 
    flexDirection: 'row'    //나열 방법(행, 열)
  },
  title:{         //Format 2
    marginLeft: 10,
    fontWeight: 'bold',     //글씨체
    color: 'gray',          //글씨 색깔
    fontSize: 15,           //글씨 크기
  },
  detail:{        //Format 3
    marginLeft:10,
  }
});

export default App;

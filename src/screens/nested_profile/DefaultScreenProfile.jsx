import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'store/auth/authOperations';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
// import vars
import { strings, sizeText, colors, mHorizontal } from 'res/vars';
import { text } from 'res/palette';
// import components
import ProfileBlock from 'components/shared/ProfileBlock';
import UserInfoBlock from 'components/profile/UserInfoBlock';
import AuthBtnBlock from 'components/profile/AuthBtnBlock';
import MainProfileBlock from 'components/profile/MainProfileBlock';
import { useState } from "react";

const HEIGHT = Dimensions.get('window').height;

export default DefaultScreenProfile = () => {
  // const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const navigation = useNavigation();
  const [showBackdrop, setShowBackdrop] = useState(false);

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        {showBackdrop && <View style={styles.backdrop}></View>}

        <View style={styles.box}>
          {
            !isLoggedIn ? (
              <AuthBtnBlock />
            ) : (
              <ProfileBlock>
                <UserInfoBlock setShowBackdrop={setShowBackdrop} />
              </ProfileBlock>
            )
          }
        </View>

        <View style={styles.box}>
          <ProfileBlock>
            <MainProfileBlock />
          </ProfileBlock>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    paddingTop: 15,
    height: HEIGHT,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99,
    height: '100%',
    width: '100%',
    backgroundColor: colors.backdrop,
  },
  box: {
    marginHorizontal: mHorizontal.baseBlock,
    marginBottom: 20,
  },
  userBlock: {
    marginBottom: 100,
  },
});
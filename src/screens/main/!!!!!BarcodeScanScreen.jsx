import { useState } from "react";
import { View } from 'react-native';
import Scanner from "components/camera/Scanner";

export default BarcodeScanScreen = () => {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    // console.log("🚀 ~ onDetected ~ result:", result)
    setResult(result);
  };

  return (
    <View>
      <Scanner onDetected={onDetected} />
    </View>
  );
};

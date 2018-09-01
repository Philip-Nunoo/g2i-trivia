import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export default ({ userResponses, ...props }) => (
  <View style={styles.container}>
    <Text>You scored</Text>
    <Text>
      {userResponses.filter(({ isValidAnswer }) => isValidAnswer).length} /{" "}
      {userResponses.length}
    </Text>
    {userResponses.map(userResponse => {
      <View>
        <Text>{userResponses.question}</Text>
        {userResponse.isValidAnswer ? <Text>Passed</Text> : <Text>Failed</Text>}
      </View>;
    })}
    {/* <Text>You will be presented with 10 True or False questions</Text>
    <Text>Can you score 100%</Text>
    <Button onPress={startGame} title="BEGIN" /> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

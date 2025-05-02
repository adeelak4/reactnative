import { StyleSheet, View, FlatList, Props, Image } from "react-native";
import React, { Component } from "react";
import Ionicon from "@expo/vector-icons/Feather";
import * as Random from "expo-random";
import { Button, Card, Text, Icon, Modal } from "@ui-kitten/components";
import Body from "../src/components/Body";
import PaymentIframe from "../src/components/PaymentIframe";
import useUser from "../hooks/useUser";
import SvgQRCode from "react-native-qrcode-svg";

const RefreshIco = (props) => <Icon {...props} name="refresh-outline" />;
const AtIco = (props) => <Icon {...props} name="at-outline" />;
const CloseIco = (props) => <Icon {...props} name="close-outline" />;

const Fares = ({ navigation }) => {
  const { daysLeft, fetchUser, buyProduct, loading, state } = useUser();
  const [open, setOpen] = React.useState(false);

  const buy = async (days) => {
    const ifrm = await buyProduct(days);
    // if (ifrm) {
    //   setUrl(ifrm);
    // }
  };

  return (
    <Body>
      <Card status="basic">
        <Text style={{ textAlign: "center" }} category="label">
          Package Expiry
        </Text>
        <Text category="h5" style={{ textAlign: "center" }}>
          {daysLeft} Days Left
        </Text>
        <Button
          appearance="outline"
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            right: 20,
            top: 20,
          }}
          accessoryLeft={RefreshIco}
          onPress={() => fetchUser()}
        />
      </Card>
      <Card style={styles.card} status="success">
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <Text category="h6">1 Day</Text>
            <Text category="s1">50PKR</Text>
          </View>
          <View>
            <Button onPress={() => buy(1)} disabled={loading || daysLeft > 1}>
              <Text>Buy</Text>
            </Button>
          </View>
        </View>
      </Card>
      <Card style={styles.card} status="primary">
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <Text category="h6">7 Day</Text>
            <Text category="s1">500PKR</Text>
          </View>
          <View>
            <Button onPress={() => buy(7)} disabled={loading || daysLeft > 4}>
              <Text>Buy</Text>
            </Button>
          </View>
        </View>
      </Card>
      <Card style={styles.card} status="warning">
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <Text category="h6">30 Days</Text>
            <Text category="s1">1000PKR</Text>
          </View>
          <View>
            <Button onPress={() => buy(30)} disabled={loading || daysLeft > 10}>
              <Text>Buy</Text>
            </Button>
          </View>
        </View>
      </Card>
      <Modal visible={!!open} style={{ width: 250, height: 300 }}>
        <Card style={{ width: "100%", height: "100%", flex: 1 }}>
          <Button
            size="tiny"
            accessoryLeft={CloseIco}
            status="danger"
            appearance="outline"
            style={{ color: "red", marginLeft: "auto", marginBottom: 20 }}
            onPress={() => setOpen(false)}
          />
          <SvgQRCode size={200} value={state.user.id} />
        </Card>
      </Modal>
      <Button
        appearance="outline"
        style={{
          width: 60,
          height: 30,
          left: "43%",
          top: 20,
        }}
        // accessoryLeft={AtIco}
        onPress={() => setOpen(!open)}
      >
        <Text status="danger">QR</Text>
      </Button>
    </Body>
  );
};

export default Fares;

const styles = StyleSheet.create({
  card: {
    // flexDirection: "row",
    margin: 5,
  },
});

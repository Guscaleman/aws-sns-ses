import { CheckIfPhoneNumberIsOptedOutCommand } from "@aws-sdk/client-sns";
import { snsClient } from "../../snsClient.js";

export const checkIfPhoneNumberIsOptedOut = async (
  phoneNumber = "5566999747471",
) => {
  const command = new CheckIfPhoneNumberIsOptedOutCommand({
    phoneNumber,
  });

  const response = await snsClient.send(command);
  console.log(response);

  return response;
};

checkIfPhoneNumberIsOptedOut();
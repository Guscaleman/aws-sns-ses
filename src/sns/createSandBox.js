import { CreateSMSSandboxPhoneNumberCommand } from "@aws-sdk/client-sns";
import { snsClient } from "../../snsClient.js";

const input = {
  PhoneNumber: "+5566999747471",
  LanguageCode: "en-US" || "en-GB" || "es-419" || "es-ES" || "de-DE" || "fr-CA" || "fr-FR" || "it-IT" || "ja-JP" || "pt-BR" || "kr-KR" || "zh-CN" || "zh-TW",
};
const command = new CreateSMSSandboxPhoneNumberCommand(input);
const response = await snsClient.send(command); //Envia código de confirmação para autorizar mobile a receber SMS
console.log(response)

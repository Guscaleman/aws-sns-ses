import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import dotenv from 'dotenv';
dotenv.config();

async function sendSMSMessage(sns, params) {
    const command = new PublishCommand(params);
    const message = await sns.send(command);
    return message;
}

(async () => {
    const params = {
        Message: `Seu código de acesso SmartVida é: ${Math.random().toString().substring(2, 8)}`,
        PhoneNumber: "66999747471",
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': 'String'
            }
        }
    };

    const sns = new SNSClient({
        region: process.env.REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY
        }
    });

    await sendSMSMessage(sns, params);
})();

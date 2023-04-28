/**
 * @author: CHIKIRIAY
 * @created: 4/2/23
 * @Time: 5:56 PM
 */
import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { Envs } from "../../envs";
import {
	RabbitMqAPPName,
	RabbitMqExchangeType,
	RabbitMqGPTName,
	RabbitMqHFName,
} from "../../../common/constants/rabbit-mq.constants";

export const RabbitMQ = () => {
	return RabbitMQModule.forRoot(RabbitMQModule, {
		exchanges: [
			{
				name: RabbitMqGPTName,
				type: RabbitMqExchangeType,
			},
			{
				name: RabbitMqHFName,
				type: RabbitMqExchangeType,
			},
			{
				name: RabbitMqAPPName,
				type: RabbitMqExchangeType,
			},
		],
		enableControllerDiscovery: true,
		enableDirectReplyTo: true,
		prefetchCount: 1,
		uri: Envs.AMPQ_URL,
	});
};

import Notification from '../infra/typeorm/schemas/Notification';
import ICreateNotificationsDTO from '../dtos/ICreateNotificationsDTO';

export default interface INotificationsRepository {
  create(data: ICreateNotificationsDTO): Promise<Notification>;
}

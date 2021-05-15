import { IAdapter } from 'src/app/core/api/adapters/i-adapter';
import { ApiService } from 'src/app/core/api/api.service';
import { GetAPICommand } from 'src/app/core/core.module';
import { environment } from 'src/environments/environment';

export class GetDataByCityIdCommand<T> extends GetAPICommand<T> {
  constructor(apiService: ApiService, adapter: IAdapter<T>, cityName: string) {
    super(
      apiService,
      adapter,
      `${environment.apiUrl}/forecast?q=${cityName}&appid=${environment.apiKey}`
    );
  }
}

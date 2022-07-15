import { Logger as Log } from 'react-logger-lib';

class Logger {
  public trace(logFrom: string, arg: any): void {
    Log.of('StaffWeb.' + logFrom).trace(arg);
  }

  public info(logFrom: string, arg: any): void {
    Log.of('StaffWeb.' + logFrom).info(arg);
  }

  public warn(logFrom: string, arg: any): void {
    Log.of('StaffWeb.' + logFrom).warn(arg);
  }

  public error(logFrom: string, arg: any): void {
    Log.of('StaffWeb.' + logFrom).error(arg);
  }
}

const logger = new Logger();

export { logger as Logger };

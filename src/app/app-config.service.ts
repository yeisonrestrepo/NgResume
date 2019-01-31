import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: Object
  private env: Object

  constructor(private http: HttpClient) { }

  /**
   * Loads the environment config file first. Reads the environment variable from the file
   * and based on that loads the appropriate configuration file - development or production
   */
  load() {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'DataType': 'application/json' });
      let options = {
        headers: headers
      };

      this.http.get('./config/config.json?cache=' + Date.now().toString(), options)
        .pipe(map(res => res),
          catchError((error: any) => {
            reject(true);
            return throwError(error.error || 'Server error');
          }))
        .subscribe((data) => {
          this.config = data;
          resolve(true);
        });

    });
  }

  /**
   * Returns environment variable based on given key
   *
   * @param key
   */
  getEnv(key: any) {
    return this.env[key];
  }

  /**
   * Returns configuration value based on given key
   *
   * @param key
   */
  get(key: any) {
    return this.config[key];
  }
}

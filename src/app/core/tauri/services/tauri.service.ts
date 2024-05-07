import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/tauri';

@Injectable({
  providedIn: 'root'
})
export class TauriService {

  get isTauri(){
    console.log(!!(window && window.__TAURI__))
    return !!(window && window.__TAURI__);
  }
  //Declare the command list in ../typings.d.ts
  public invoke<Cmd extends keyof CommandList>(cmd: Prettify<keyof CommandList>, args: Prettify<CommandList[Cmd]['Args']>): Promise<Prettify<CommandList[Cmd]["Response"]>>{
    return invoke(cmd, args);
  }

}





import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreation = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Server1', 'Server2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreation = 'Server was created! New server name: ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
  }

}

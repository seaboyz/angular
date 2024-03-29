import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = true;
  serverName = "";
  serverIsCreated = false;
  serverCreationStatus = "No server was created!";
  servers: string[] = []

  onCreateServer() {
    this.serverIsCreated = true
    this.updateServerCreattionStatus()
    this.servers.push(this.serverName)
    this.serverName = ""
  }

  updateServerCreattionStatus() {
    this.serverCreationStatus = this.serverIsCreated ? "Server was created" : "No server was created!"
  }

}
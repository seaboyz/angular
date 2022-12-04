import { Component } from "@angular/core"

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]

})

export class ServerComponent {
  private serverId: number = 10
  serverStatus: string

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline"
  }

  getServerId() {
    return this.serverId
  }

  getServerStatus() {
    return this.serverStatus
  }

}
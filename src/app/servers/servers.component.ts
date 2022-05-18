import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit
{
  allowNewServer: boolean;
  serverCreationStatus: string;
  serverName: string;

  constructor()
  {
    this.allowNewServer = false;
    this.serverCreationStatus = "No server was created!";
  }

  ngOnInit(): void
  {
    setTimeout(
      () => this.allowNewServer = true,
      2000);
  }

  onCreateServer()
  {
    this.serverCreationStatus = "Server was created!"
  }

  onUpdateServerName(event: Event)
  {
    const target = <HTMLInputElement>event.target;
    this.serverName = target.value;
  }

}

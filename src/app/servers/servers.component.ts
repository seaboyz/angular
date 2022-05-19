import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit
{
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  serverIsCreated = false;

  constructor()
  {

  }

  ngOnInit(): void
  {
  }

  onCreateServer()
  {
    this.serverIsCreated = true;
  }

  onUpdateServerName(event: Event)
  {
    const target = <HTMLInputElement>event.target;
    this.serverName = target.value;
  }

}

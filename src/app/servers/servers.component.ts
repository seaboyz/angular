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
  serverName = "test server";

  constructor()
  {

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

  logTemplateVarible(value)
  {
    console.log(value)

  }

}

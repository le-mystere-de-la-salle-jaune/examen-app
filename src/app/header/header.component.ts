import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { CookieService } from '../../../node_modules/ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   id: string;
   email:string;

  constructor(private route: ActivatedRoute, private cookie:CookieService) {
    this.id = route.snapshot.paramMap.get("id");
    this.email = cookie.get("email");
  }

  ngOnInit() {
  }

}

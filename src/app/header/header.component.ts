import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   id: string;

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
  }

}

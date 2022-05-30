import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  title = 'Card title'

  text = 'My text'

  imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://secure.meetupstatic.com/photos/event/3/0/4/4/highres_465972356.jpeg'
    }, 3000)
  }

}

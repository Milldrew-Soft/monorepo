import { Component, Input } from '@angular/core';

@Component({
  selector: 'millterial-basic-avatar',
  templateUrl: './basic-avatar.component.html',
  styleUrls: ['./basic-avatar.component.css'],
})
export class BasicAvatarComponent {
  @Input()
  avatarUrl: string;
  @Input()
  parsedAvatarUrl: { 'background-image': string };
  constructor() {}
  ngOnChanges() {
    this.parsedAvatarUrl = {
      'background-image': this.avatarUrl
        ? `url("${this.avatarUrl}"`
        : 'url("https://material.angular.io/assets/img/examples/shiba1.jpg")',
    };
  }
}

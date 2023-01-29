import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicAvatarComponent } from './basic-avatar/basic-avatar.component';

@NgModule({
  declarations: [BasicAvatarComponent],
  imports: [CommonModule],
  exports: [BasicAvatarComponent],
})
export class AvatarsModule {}

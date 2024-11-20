import { Component } from '@angular/core';
import { ImagenesComponent } from '../../componentes/imagenes/imagenes.component';

@Component({
  selector: 'app-primerapage',
  standalone: true,
  imports: [ImagenesComponent],
  templateUrl: './primerapage.component.html',
  styleUrl: './primerapage.component.css'
})
export class PrimerapageComponent {

}

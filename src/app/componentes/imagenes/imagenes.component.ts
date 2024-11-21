import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ServicioTiempoService } from '../../services/servicio-tiempo.service';


//creamos una clase de ciudad
interface Ciudad{
  nombreCiudad: string;
  imagenUrl: string;
}

@Component({
  selector: 'app-imagenes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule,],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.css'
})
export class ImagenesComponent implements OnInit {

  weatherData: any;
  

  //creamos el textbox para ingresar el nombre y lo añadimos en el form el la pagina 1 
  txBox=new FormGroup({ciudad:new FormControl('')});
  constructor(private weatherService: ServicioTiempoService ) { }


  //lista de ciudades y Url de las imagenes 
  ciudades: Ciudad[] = [
    {nombreCiudad: 'Madrid', imagenUrl: 'https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg'},
    {nombreCiudad: 'Barcelona', imagenUrl: 'https://europamundoblog.com/wp-content/uploads/2019/01/sagrada-familia.jpg'},
    {nombreCiudad: 'Alicante', imagenUrl: 'https://static.ledbox.es/posicionamiento/provincias/alicante.jpg'},
    {nombreCiudad: 'Sevilla', imagenUrl: 'https://th.bing.com/th/id/R.e182243a28e7f7b333ca0841f49df311?rik=SYOXe6m0WkMImg&pid=ImgRaw&r=0'},
    {nombreCiudad: 'Valencia', imagenUrl: 'https://th.bing.com/th/id/OIP.-59cOEPwWTxuvbQHCow36wHaE8?rs=1&pid=ImgDetMain'},
    {nombreCiudad: 'Granada', imagenUrl: 'https://elviajerofeliz.com/wp-content/uploads/2018/04/Que-ver-en-Granada.jpg'},
    {nombreCiudad: 'Bilbao', imagenUrl: 'https://th.bing.com/th/id/R.b695ef5f33e845fd7a6d6763c9124c54?rik=6CwanCNCF%2ffVTA&pid=ImgRaw&r=0'},
    {nombreCiudad: 'Zaragoza', imagenUrl: 'https://th.bing.com/th/id/OIP.q0GSdFoIYOou4Pp-IcRgZQHaEb?rs=1&pid=ImgDetMain'},
    {nombreCiudad: 'Malaga', imagenUrl: 'https://th.bing.com/th/id/OIP.iyWg2EK-o1qDrgkgt0sPwwHaEl?rs=1&pid=ImgDetMain'},
    {nombreCiudad: 'Salamanca', imagenUrl: 'https://oleganatravelboutique.com/wp-content/uploads/2016/02/Salamanca_Cathedral_-_after_sunrise-2.jpg'},
    {nombreCiudad: 'Pamplona', imagenUrl: 'https://th.bing.com/th/id/OIP.5EYvNRSO08EJELYg8IqZBQHaE7?rs=1&pid=ImgDetMain'},
    {nombreCiudad: 'Murcia', imagenUrl: 'https://th.bing.com/th/id/OIP.EVbzBoMynrV9WWgz1Eu4fQHaFU?rs=1&pid=ImgDetMain'},
    {nombreCiudad: 'Santander', imagenUrl: 'https://th.bing.com/th/id/R.ec6be32f85969a76d473ceaad62fd777?rik=wrW7Tay4cZLiFQ&riu=http%3a%2f%2fevasion-online.com%2fimagearticle%2f2016%2f05%2fsantander-espagne.jpg&ehk=gchInJSb4%2fofj%2fq0%2bHb%2f5%2fme%2fVeVPD3KAfb5kb9aIUU%3d&risl=&pid=ImgRaw&r=0'},
    {nombreCiudad: 'Burgos', imagenUrl: 'https://th.bing.com/th/id/R.bfb9442fb5693b3a1e66888927bd2883?rik=uNDHT5Khac7jyQ&riu=http%3a%2f%2faunclicdelaaventura.com%2fwp-content%2fuploads%2f2015%2f01%2fBurgos-Nevado-031-Modificada.jpg&ehk=imP94kKy2OlW0hbXJLREMoZ5ybwrq9w6icL4EMx%2bZgA%3d&risl=&pid=ImgRaw&r=0'},
    {nombreCiudad: 'Cádiz', imagenUrl: 'https://www.cadizturismo.com/storage/app/media/uploaded-files/p-cadiz_turismo.jpg'},
    {nombreCiudad: 'Palma', imagenUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-535651867_super.jpg'},
    {nombreCiudad: 'A Coruña', imagenUrl: 'https://turismo20.com/wp-content/uploads/2020/01/La-Coruna.jpg'}
    
  ];
  

  //variable para almacenar las ciudades filtradas
  ciudadesFiltradas: Ciudad[] =[...this.ciudades];

  //metodo para filtrar las ciudades
  ngOnInit() {
    this.txBox.get('ciudad')?.valueChanges.subscribe((value: string | null) => {
      if (value) {
        this.getWeather();
      }
    });
    this.txBox.get('ciudad')?.valueChanges.subscribe((value: string | null) => {
      if (value) {
        // Filtrar las ciudades que contengan el valor ingresado
        this.ciudadesFiltradas = this.ciudades.filter(ciudad => 
          ciudad.nombreCiudad.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        // Si el campo está vacío, mostrar todas las ciudades
        this.ciudadesFiltradas = [...this.ciudades];
      }
    });
  }
  // Método para obtener el clima
  getWeather() {
    const ciudadIngresada = this.txBox.get('ciudad')?.value; // Obtiene el valor(ciudad) ingresado en el textbox
    if (ciudadIngresada) {
      this.weatherService.getWeatherByCity(ciudadIngresada).subscribe(
        data => {
          this.weatherData = data;
          console.log('Datos del clima:', this.weatherData);
          console.log('Temperatura:', this.weatherData.main.temp);
        },
        error => {
          console.error('Error al obtener los datos del clima:', error);
        }
      );
    } else {
      console.warn('No se ha ingresado ninguna ciudad.');
    }
  }
  // Método para traducir las descripciones del clima
  traducirDescripcion(clima: string): string {
    const traducciones: { [key: string]: string } = {
      'clear sky': 'Cielo despejado',
      'few clouds': 'Pocas nubes',
      'scattered clouds': 'Nubes dispersas',
      'broken clouds': 'Nubes rotas',
      'shower rain': 'Lluvia ligera',
      'rain': 'Lluvia',
      'thunderstorm': 'Tormenta eléctrica',
      'snow': 'Nieve',
      'mist': 'Neblina'
    };
    return traducciones[clima] || clima;
  }
}
  


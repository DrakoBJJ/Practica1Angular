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
    {nombreCiudad: 'Madrid', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Madrid'},
    {nombreCiudad: 'Barcelona', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Barcelona'},
    {nombreCiudad: 'Alicante', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Alicante'},
    {nombreCiudad: 'Sevilla', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Sevilla'},
    {nombreCiudad: 'Valencia', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Valencia'},
    {nombreCiudad: 'Granada', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Granada'},
    {nombreCiudad: 'Bilbao', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Bilbao'},
    {nombreCiudad: 'Zaragoza', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Zaragoza'},
    {nombreCiudad: 'Malaga', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Malaga'},
    {nombreCiudad: 'Salamanca', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Salamanca'},
    {nombreCiudad: 'Pamplona', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Pamplona'},
    {nombreCiudad: 'Murcia', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Murcia'},
    {nombreCiudad: 'Santander', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Santander'},
    {nombreCiudad: 'Burgos', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Burgos'},
    {nombreCiudad: 'Cádiz', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Cádiz'},
    {nombreCiudad: 'Palma', imagenUrl: 'https://via.placeholder.com/350x200.png?text=Palma'},
    {nombreCiudad: 'A Coruña', imagenUrl: 'https://via.placeholder.com/350x200.png?text=A+Coruña'}
    
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
  


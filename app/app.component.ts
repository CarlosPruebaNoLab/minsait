import { Component } from '@angular/core';
import { faHouse, faRightFromBracket, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Notify } from 'notiflix/build/notiflix-notify-aio'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public icoHouse = faHouse;
  public icoLogout = faRightFromBracket;
  public icoQuestion = faCircleQuestion;

  public logout() {
    this.notify('Simula cerrar sesion');
  }

  public home() {
    this.notify('Simula ir a home');
  }

  public validarForm() {
    this.notify('Simula validar formulario');
  }

  public cancelarForm() {
    this.notify('Simula cancelar formulario');
  }

  private notify(_mensaje: string) {
    Notify.success(_mensaje,
      {
        position: 'center-top',
        useIcon: false,
        fontSize: '15px',
        success: {
          background: "#198754",
          textColor: '#fff'
        }
      },
    );
  }

}

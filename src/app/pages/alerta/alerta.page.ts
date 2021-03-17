import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {

  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text:"Ok!",
          handler: () =>{
            console.log("Presiono sobre Ok");
          }
        },
        {
          text:'Cancelar',
          role: 'cancel',
          cssClass: 'rojo'
        },
      ]
    });
    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Prompt!',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Ingrese su nombre'
        },
        {
          name: 'usuario',
          type: 'text',
          id: 'usuario-id',
         // value: 'user',
          placeholder: 'Ingrese su nombre de usuario'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Cuéntenos sus hobbies'
        },
        {
          name: 'url',
         // value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Liga de Git?'
        },
        // input date with min & max
        {
          name: 'date',
          type: 'date',
          min: '2017-03-01',
          max: '2025-01-12'
        },
        // input date without min nor max
        {
          name: 'date2',
          type: 'date',
          min: '2017-03-01',
          max: '2025-01-12'
        },
        {
          name: 'phone',
          type: 'number',
          min: 9,
          max: 10,
          placeholder: 'Numero de teléfono'
        },
      //  {
      //    name: 'name7',
      //    type: 'number'
      //  },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Escriba su contraseña',
        //  cssClass: 'specialClass',
          attributes: {
            maxlength: 8,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: ( data: any) => {
            console.log(data);
          }
        }
      ]
    });
    await alert.present();
  }
  async presentAlertRadio() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertCheckbox() {
    const alert = await this.alertCtrl.create({
      header: 'Tecnologías que domina',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'PHP',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'JAVA',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: '.NET',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'PYTHON',
          value: 'value4'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}

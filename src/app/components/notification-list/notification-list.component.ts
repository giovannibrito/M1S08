import { Component } from '@angular/core';

interface Notificacao{
  aplicativo: string;
  mensagem: string;
  data: string;
  lido: boolean;
}

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notificacoes: Notificacao[] = [
    {aplicativo: "iFood", mensagem: "Seu pedido chegou!", data: "agora", lido:false},
    {aplicativo: "Nubank ", mensagem: "Sua fatura está fechada", data: "15 minutos atrás", lido:false},
    {aplicativo: "Shopee", mensagem: "Não perca as promoções da Black Friday!", data: "2h atrás", lido:false}
  ];
  
  marcarLido(notificacao: Notificacao) {
    notificacao.lido = true
  }
}

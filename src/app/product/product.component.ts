import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component'

interface Product {
  title: string,
  image: string,
  description: string,
  condition: string,
  price: string,
  age: string,
  grade: string,
  category: string,
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() item: Product;
  @Input() category: string;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    if(!this.category){
      this.category = 'All'
    }
  }

  public openModal(){
    const modalRef = this.modalService.open(ModalComponent,
      {
        windowClass: 'default-modal',
        size: 'lg',
        keyboard: true,
        backdrop: 'static'
      }
    );
    modalRef.componentInstance.item = this.item;
  }
}

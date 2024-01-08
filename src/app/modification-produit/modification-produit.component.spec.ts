import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationProduitComponent } from './modification-produit.component';

describe('ModificationProduitComponent', () => {
  let component: ModificationProduitComponent;
  let fixture: ComponentFixture<ModificationProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationProduitComponent]
    });
    fixture = TestBed.createComponent(ModificationProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { of } from 'rxjs';
import { UserService } from './../user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { By } from '@angular/platform-browser';
//TODO Read about all

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers:[UserService]
    }).compileComponents();
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      {id: 1, name: "Hasan Hammoudah"},
      {id:2,name:"Ismail Hammoudah"},

    ]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should retrieve users from the UserService on init', () => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  })

  it('should retrieve users from the UserService when the refresh button is clicked', () => {
    fixture.detectChanges();
    userServiceSpy.calls.reset();
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(userServiceSpy).toHaveBeenCalled();

  })
});

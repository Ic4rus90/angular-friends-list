import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  /*
    @Input allows child component to receive data from its parent component. 
    @Input('person') tells Angular that the person property in PeopleComponent will be input from a parent component.
    The parent component will provide a value for person when it uses the <app-people> tag in its template. 
    person: string = ' ' => property name in the PeopleComponent. If no value is provided by the parent, the property will default to empty string.
    'person' is the ALIAS or BINDING NAME that the component will use to bind data to this property. 
    'person' is the name by which the parent component can pass the value to this child component. 
    READ UP FURTHER ON PROPERTY BINDING.
    'person' alias is optional, and simply serves as a name that the parent can use to bind data. 
  */
  
  @Input('person') person: string = '';

  @Input('favorite') favorite: boolean = false;
  
  /* 
  Define the custom event. Emits a string.
  @Output() decorator makes the selected property available as an event that the parent component can listen to. 
  EventEmitter<string>() is a special class provided by Angular to emit custom events. 
  selected: the name of the custom event being emitted. 
  */
  @Output('selected') selected = new EventEmitter<string>();

  @Output('remove') remove = new EventEmitter<string>();
}

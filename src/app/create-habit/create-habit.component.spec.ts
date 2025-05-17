import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CreateHabitComponent } from './create-habit.component';

describe('CreateHabitComponent', () => {
  let component: CreateHabitComponent;
  let fixture: ComponentFixture<CreateHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHabitComponent, FormsModule] // importante: standalone + forms
    }).compileComponents();

    fixture = TestBed.createComponent(CreateHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar categorías desde localStorage en ngOnInit', () => {
    const mockCategories = ['Salud', 'Estudio'];
    localStorage.setItem('categories', JSON.stringify(mockCategories));
    component.ngOnInit();
    expect(component.categories).toEqual(mockCategories);
  });

  it('debe dejar categorías vacías si no hay datos en localStorage', () => {
    localStorage.removeItem('categories');
    component.ngOnInit();
    expect(component.categories).toEqual([]);
  });

  it('debe lanzar alerta si algún campo está vacío al guardar hábito', () => {
    spyOn(window, 'alert');
    component.habitName = '';
    component.selectedCategory = '';
    component.frequency = '';
    component.saveHabit();
    expect(window.alert).toHaveBeenCalledWith('Please fill all fields');
  });

  it('debe guardar el hábito y reiniciar campos', () => {
    component.habitName = 'Leer';
    component.selectedCategory = 'Estudio';
    component.frequency = 'Diario';

    component.saveHabit();

    const saved = JSON.parse(localStorage.getItem('habits') || '[]');
    expect(saved.length).toBe(1);
    expect(saved[0]).toEqual({
      name: 'Leer',
      category: 'Estudio',
      frequency: 'Diario'
    });

    expect(component.habitName).toBe('');
    expect(component.selectedCategory).toBe('');
    expect(component.frequency).toBe('');
  });

  it('debe agregar un nuevo hábito a los existentes en localStorage', () => {
    const initialHabits = [
      { name: 'Correr', category: 'Salud', frequency: 'Diario' }
    ];
    localStorage.setItem('habits', JSON.stringify(initialHabits));

    component.habitName = 'Estudiar';
    component.selectedCategory = 'Estudio';
    component.frequency = 'Semanal';
    component.saveHabit();

    const saved = JSON.parse(localStorage.getItem('habits') || '[]');
    expect(saved.length).toBe(2);
    expect(saved[1]).toEqual({
      name: 'Estudiar',
      category: 'Estudio',
      frequency: 'Semanal'
    });
  });

  it('debe llamar a saveHabit cuando se hace clic en el botón Guardar', () => {
    spyOn(component, 'saveHabit');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.saveHabit).toHaveBeenCalled();
  });

  it('debe renderizar las categorías en el menú desplegable', () => {
  component.categories = ['Dormir', 'Ejercicio'];
  fixture.detectChanges();

  const select = fixture.debugElement.queryAll(By.css('select'))[0];
  const options = select.queryAll(By.css('option'));

  expect(options.length).toBe(3); 
  expect(options[1].nativeElement.textContent).toContain('Dormir');
  expect(options[2].nativeElement.textContent).toContain('Ejercicio');
});
});

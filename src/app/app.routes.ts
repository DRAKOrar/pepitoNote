import { Routes } from '@angular/router';
import { CrearHabitoComponent } from './components/crear-habito/crear-habito.component';
import { EditarNotaComponent } from './components/editar-nota/editar-nota.component';
import { AsignarRecordatorioComponent } from './components/asignar-recordatorio/asignar-recordatorio.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateHabitComponent } from './create-habit/create-habit.component';
import { HabitListComponent } from './habit-list/habit-list.component';

export const routes: Routes = [
  {
    path:'habito', component:CrearHabitoComponent
  },
  {
    path:'nota', component:EditarNotaComponent
  },
  {
    path:'asign',component:AsignarRecordatorioComponent
  }  ,
  {
    path:'cat', component:CategoriasComponent
  },
  {
    path:'new-note', component:NewNoteComponent
  },
  {
    path:'list-note', component:ListNotesComponent
  },
  {
    path:'category', component:CreateCategoryComponent
  },
  {
    path:'create-habit',component:CreateHabitComponent
  },
  {
    path:'habit-list',component:HabitListComponent
  }
];

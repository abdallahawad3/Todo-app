import { Card, TextField, Button, Typography, Divider, ButtonGroup, CardContent, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Todo } from './Todo';
import { v4 as myId } from 'uuid';
import { useState } from 'react';
const initialTodos = [
  {
    id: myId(),
    title: "هذا هو العنوان الاول",
    description: "هذا هو تفاصيل العنوان الاول",
    isCompleted: false
  },
  {
    id: myId(),
    title: "هذا هو العنوان الثاني",
    description: "هذا هو تفاصيل العنوان الثاني",
    isCompleted: false
  },
  {
    id: myId(),
    title: "هذا هو العنوان الثالث",
    description: "هذا هو تفاصيل العنوان الثالث",
    isCompleted: false
  }
];

export function TodoList() {

  // All UseState
  const [todos, setTodo] = useState(initialTodos);
  const allToDos = todos.map((ele) => {
    return <Todo title={ele.title} description={ele.description} key={ele.id} />
  });

  const [todo, setInputTodo] = useState("");

  function addNewTask() {
    if (todo) {
      const newToDo = {
        id: myId(),
        title: todo,
        description: "الاااا",
        isCompleted: false
      }
      setTodo([...todos, newToDo]);
      setInputTodo("");
    }
  }

  return (
    <>
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h2' sx={{ fontWeight: 600, fontSize: "40px" }}>
              مهامي
              <Divider />
            </Typography>

            {/* ✅✅✅✅✅✅✅✅ Filter Buttons ✅✅✅✅✅✅✅✅ */}
            <ButtonGroup variant="outlined" style={{ margin: "30px 0 10px", direction: "ltr" }} aria-label="Basic button group">
              <Button>الغير منجز</Button>
              <Button>المنجز</Button>
              <Button>الكل</Button>
            </ButtonGroup>
            {/* ❌❌❌❌❌❌❌❌ Filter Buttons ❌❌❌❌❌❌❌❌ */}
            {/* ✅✅✅✅✅✅✅✅ All Todos ✅✅✅✅✅✅✅✅ */}
            {allToDos}
            {/* ❌❌❌❌❌❌❌❌ All Todos ❌❌❌❌❌❌❌❌*/}

            {/* Input + Add New Todo */}
            <Grid container sx={{ marginTop: 5 }} spacing={1}>
              <Grid xs={8} sx={{ direction: "ltr" }} >
                <TextField
                  value={todo}
                  onChange={(e) => { setInputTodo(e.target.value) }}
                  id='outlined-basic'
                  label="عنوان المهمة"
                  variant="outlined"
                  style={{ textAlign: "right", width: "100%" }} />
              </Grid>
              <Grid xs={4}>
                <Button style={{ width: "100%", height: "100%" }} variant='contained' onClick={addNewTask}>اضافه مهمة</Button>
              </Grid>
            </Grid>

            {/* Input + Add New Todo */}
          </CardContent>


        </Card>
      </Container >
    </>
  );
}

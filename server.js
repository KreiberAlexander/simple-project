// Пример как работать с веткой
// вы получили задачу сделать функцию суммирования

// 1. Обновите ветку main - git pull
// 2. Создадим из мейн новую ветку sum и переключимся в нее
//  git checkout -b sum
// 3. Напишем код и после сохраним
//  git add .
//  git commit -m 'add sum function'
// 4. Сделаем гитпуш в одноименную удаленную ветку
//  из sum в origin sum
//  первый пуш должен содержать флаг -u 
//  git pushhome_page
// 5 вносишь изменения 
//  git add .
//  git commit -m 'add blabla'
//  git push
// Как отменить какой-то коммит, который уже запушили?
// узнать код коммита с помощью git log --oneline
// git revert <hash commit> --no-edit
// Например 
// git revert b69bf71 --no-edit

// перехожу в ветку мейн
// git checkout main
// обновить ветку мейн
// git pull
// создаем ветку под задачу
// git checkout -b blog
// пишем код, blog.html
// сохраняем локально
// git add .
// git commit -m 'add blog'
// запушим в такую же удаленную ветку
// git push --set-upstream origin blog
// идем в браузер и открываем вкладку Pull requests
// создаем новый пулреквест в котором указываем
// из какой ветки в какую мы хотим сделать пулреквест
// Если нужно внести изменения в пулреквест
// Меняем код и делаем
// git add .
// git commit -m 'fix blabala'
// git push
// Удалить локальную ветку
// git branch -d spinner
// Если хочу отменить коммит - перезаписать его новым коммитом
git revert <hash commit> --no-edit
// Как отменить какой-то коммит, который уже запушили?
// узнать код коммита с помощью git log --oneline
// git revert <hash commit> --no-edit
// Например
// git revert b69bf71 --no-edit
git config --global core.editor "code --wait"
git config --merge.tool vscode
git config --global mergetool.vscode.cmd "code --wait $MERGED"
// Если при pull возникает конфликт
// в эдикторе разрешаете конфликт - выбираете нужный вариант или комбинацию
// git add .
// git rebase --continue
// Если запутались и не получается git rebase --abort и заново делаете pull












Nachricht an cohort74










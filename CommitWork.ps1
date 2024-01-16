$msg = Read-Host "Enter commit message"

Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 0
git add .
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 10
git commit -m $msg
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 20
git push --set-upstream origin staging
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 30
git push --set-upstream gitlab staging
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 40
git switch -M master
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 50
git merge gitlab/staging
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 60
git push --set-upstream origin master
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 70
git push --set-upstream gitlab master
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 80
git switch -M staging
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 90
git fetch
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 100

Write-Progress -Activity "Committing" -Completed

Write-Host "Done"
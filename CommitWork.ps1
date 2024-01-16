$msg = Read-Host "Enter commit message"

Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git add ." -PercentComplete 0
git add . | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git commit -m $msg" -PercentComplete 10
git commit -m $msg | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git push --set-upstream origin staging" -PercentComplete 20
git push --set-upstream origin staging | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git push --set-upstream gitlab staging"  -PercentComplete 30
git push --set-upstream gitlab staging | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git branch -M master"  -PercentComplete 40
git branch -M master | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git merge gitlab/staging"  -PercentComplete 50
git merge gitlab/staging | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git push --set-upstream origin master" -PercentComplete 60
git push --set-upstream origin master | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git push --set-upstream gitlab master"  -PercentComplete 70
git push --set-upstream gitlab master | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git branch -M staging" -PercentComplete 80
git branch -M staging | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -CurrentOperation "git fetch --all" -PercentComplete 90
git fetch --all | Out-Null
Write-Progress -Activity "Committing" -Status "Committing changes to git" -PercentComplete 100

Write-Progress -Activity "Committing" -Completed

Write-Host "Done"
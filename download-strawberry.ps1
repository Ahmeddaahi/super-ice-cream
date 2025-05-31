$url = "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1024&auto=format&fit=crop"
$outputPath = "public/images/strawberry.jpg"
Write-Host "Downloading $url to $outputPath"
Invoke-WebRequest -Uri $url -OutFile $outputPath

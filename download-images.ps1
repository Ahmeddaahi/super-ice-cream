$imageUrls = @(
    @{
        url = "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1024&auto=format&fit=crop";
        filename = "vanilla.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1024&auto=format&fit=crop";
        filename = "chocolate.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1556682851-c4918be5f497?q=80&w=1024&auto=format&fit=crop";
        filename = "strawberry.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1024&auto=format&fit=crop";
        filename = "caramel.jpg"
    }
)

foreach ($image in $imageUrls) {
    $outputPath = "public/images/$($image.filename)"
    Write-Host "Downloading $($image.url) to $outputPath"
    Invoke-WebRequest -Uri $image.url -OutFile $outputPath
}

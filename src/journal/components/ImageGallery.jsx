
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const ImageGallery=({images})=> {
  return (
    <ImageList sx={{ width: '80%', height: 500 }} cols={4} rowHeight={300}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='Imagen de la noa'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

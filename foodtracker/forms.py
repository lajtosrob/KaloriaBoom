from django import forms

from .models import Food, Image


class FoodForm(forms.ModelForm):
    '''
    A ModelForm class for adding a new food item
    '''
    class Meta:
        model = Food
        fields = ['food_name', 'quantity', 'calories', 'fat', 'carbohydrates', 'protein', 'category']

        labels = {
            'food_name' : 'Étel neve',
            'quantity' : 'Mennyiség', 
            'calories' : 'Kalória' , 
            'fat' : 'Zsír', 
            'carbohydrates' : 'Szénhidrát',
            'protein' : 'Fehérje',
            'category' : 'Kategória',
        }

    def __init__(self, *args, **kwargs):
        super(FoodForm, self).__init__(*args, **kwargs)
        for visible in self.visible_fields():
            visible.field.widget.attrs['class'] = 'form-control'

    


class ImageForm(forms.ModelForm):
    '''
    A ModelForm class for adding an image to the food item
    '''
    class Meta:
        model = Image
        fields = ['image']

        labels  = {
            'image' : 'Kép'
        }

    def __init__(self, *args, **kwargs):
        super(ImageForm, self).__init__(*args, **kwargs)
        self.visible_fields()[0].field.widget.attrs['class'] = 'form-control'

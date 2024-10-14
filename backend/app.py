import json

def get_menu():
    menu = [
        {
            "name": "Pork Leg Rice",
            "description": "Tender pork meat and skin, a signature dish loved by customers",
            "price": 120
        },
        {
            "name": "Shrimp Fried Rice",
            "description": "Aromatic shrimp fried rice with a fried egg, served with fresh vegetables and lemon",
            "price": 100
        },
        {
            "name": "Sanae Thai Ice Cream",
            "description": "Special dessert of the restaurant, crispy golden roti, Sanae Thai's exclusive recipe",
            "price": 80
        }
    ]
    return json.dumps(menu)

if __name__ == "__main__":
    print(get_menu())
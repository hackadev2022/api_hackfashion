# api_hackfashion

## Available Scripts

In the project directory, you can run:

### `npm start`

## available routes

`
/productsRouter
/customersRouter
/addressRouter
/pedidosRouter
/orderDetailsRouter
`

## `/productsRouter`

### method: GET `/products`
returns all products <br/>
![image](https://user-images.githubusercontent.com/106037619/194573765-879d3d4b-c7cd-497a-8277-dfdf90fd3db7.png)

### method: GET `/products/:product_id`
returns the product of id = product_id <br/>
![image](https://user-images.githubusercontent.com/106037619/194573539-7b5f78fc-7304-4e55-85cd-815377bbca7e.png)

### method: GET `/productsFilter/:type`
returns the products that have the type informed <br/>
![image](https://user-images.githubusercontent.com/106037619/194574190-ed060fe2-6e97-4f63-9ec6-e292bed4cbea.png)

### method: GET `/productSize/:product_id`
returns the available sizes of the product corresponding to the id informed <br/>
![image](https://user-images.githubusercontent.com/106037619/194574468-9ff43b3e-1c90-4ea9-b18c-5a6957d72b16.png)

### method: GET `/productStar/:product_id`
returns the total stars and how many stars should be displayed for the given product id <br/>
![image](https://user-images.githubusercontent.com/106037619/194575503-81806621-2595-4b57-a4ca-1831ccd2df99.png)
 ![image](https://user-images.githubusercontent.com/106037619/194575690-855996e8-8d7d-4bf5-8f78-c2772f02bf55.png)

## `/customersRouter`

### method: POST `/login`
returns some user data <br/>
![image](https://user-images.githubusercontent.com/106037619/194577501-6a0aaf9f-c518-4bfb-b928-20bb58c47b93.png) <br/>
if the email is wrong or not registered it returns `notFound` <br/>
![image](https://user-images.githubusercontent.com/106037619/194578408-15017687-f0a8-4b80-8763-badbee014fe4.png) <br/>
if the password is wrong it returns `wrongPassword` <br/>
![image](https://user-images.githubusercontent.com/106037619/194578626-cd9bee07-5c1f-4ddc-8c27-d3945bc1fe96.png)

### method: POST `/customer`
returns some user data <br/>

## `/addressRouter`



## `/pedidosRouter`



## `/orderDetailsRouter`



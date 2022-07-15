// import ReactDom from 'react-dom/client';

// const root = ReactDom.createRoot(document.getElementById('root'));

// function tick(){

//   const element = (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>It's {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );

//   root.render(element);
// }


// setInterval(tick,1000);

import React from 'react';
import ReactDOM from 'react-dom/client';
import PRODUCTS from './products';

class ProductCategoryRow extends React.Component{
  render(){
    const category = this.props.category;
    return(
      <tr>
        <th colSpan='2'>
          {category}
        </th>
      </tr>
    );
  }
}



class ProductRow extends React.Component{
  render(){
    const products = this.props.products;
    const name = products.stocked ? products.name :
    <span style={{color:'red'}}>
      {products.name}
    </span>
    return(
      <tr>
        <td>{name}   </td>
        <td>{products.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component{
  render(){

    const rows = [];
    let lastCategory = null;



    this.props.products.forEach((product) => {
      if(lastCategory!==product.category){
        rows.push(
          <ProductCategoryRow 
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(
        <ProductRow 
          products={product}
          key={product.name}
        />
      );

      lastCategory=product.category;
    });

    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

class SearchBar extends React.Component{
  render(){
    return(
      <div>
        <form>
          <input type='text' placeholder='Search. . . . .'/>
          <p>
            <input type='checkbox' />
            {' '}
            Show only stocked items
          </p>
        </form>
      </div>
    );
  }
}

class FilterTable extends  React.Component{
  render(){

    return(
      <div>
        <SearchBar />
        <ProductTable 
          products={this.props.products}
        />
      </div>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilterTable products={PRODUCTS}/>);


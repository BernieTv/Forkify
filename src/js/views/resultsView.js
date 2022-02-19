import icons from 'url:../../img/icons.svg'; // Parcel 2
import View from './View.js';
import previewView from './previewView.js';
import { async } from 'regenerator-runtime';

class ResultView extends View {
	_parentElement = document.querySelector('.results');
	_errorMessage = 'No recipes found for your query! Please try again ;)';
	_message = '';

	_generateMarkup() {
		return this._data
			.map(result => previewView.render(result, false))
			.join('');
	}
}

export default new ResultView();

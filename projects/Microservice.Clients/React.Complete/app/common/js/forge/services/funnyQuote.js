/*
    HomeDepot.Platform.Samples.FunnyQuote.Microservice FunnyQuote API version 1.0.1-build-5
    This code is auto-generated.  Any modificaions will be overwritten.
*/

import ajax from '../support/ajax';
import { Promise } from 'es6-promise';
import Auth from '../support/auth';
import Token from './token';
    
        export default (function() {
            var entityOptions = {
                baseUri: '/',
                environment: 'dev-forge'
            };

            var setOptions = function (options) {
                entityOptions.baseUri = options.baseUri || '';

                if (entityOptions.baseUri.length && entityOptions.baseUri[entityOptions.baseUri.length - 1] != '/')
                    entityOptions.baseUri = entityOptions.baseUri + '/';
            };

            var addQuote = function(quote) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Samples.FunnyQuote.Microservice/1.0.1-build-5/FunnyQuote/addQuote';

                if (typeof quote !== 'undefined' && quote !== null)
                    url += '/' + encodeURIComponent(quote);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var deleteAllAsync = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Samples.FunnyQuote.Microservice/1.0.1-build-5/FunnyQuote/deleteAllAsync';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'POST',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var fetch = function(id) {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Samples.FunnyQuote.Microservice/1.0.1-build-5/FunnyQuote/fetch';

                if (typeof id !== 'undefined' && id !== null)
                    url += '/' + encodeURIComponent(id);

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true,
                    authRetry: function (refreshToken, fn) {
                        var promise = new Promise(function(resolve, reject) {
                            if (refreshToken) {
                                Token.refresh(refreshToken).then(function () {
                                    fn().then(function (response) {
                                        resolve(response, this.statusText);
                                    },
                                    function () {
                                        reject(this.statusText);
                                    });
                                },
                                function () {
                                    Auth.setRefreshToken();
                                });
                            }
                            else {
                                reject(this.statusText);
                            }
                        });

                        return promise;
                    }
                });
            };

            var getAll = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Samples.FunnyQuote.Microservice/1.0.1-build-5/FunnyQuote/getAll';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var getNotified = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Samples.FunnyQuote.Microservice/1.0.1-build-5/FunnyQuote/getNotified';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var getRandomQuote = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Samples.FunnyQuote.Microservice/1.0.1-build-5/FunnyQuote/getRandomQuote';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };

            var sendMessage = function() {
                var url = entityOptions.baseUri + 'services/HomeDepot.Platform.Samples.FunnyQuote.Microservice/1.0.1-build-5/FunnyQuote/sendMessage';

                var postArgs = null;

                return ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json',
                    data: postArgs,
                    cache: false,
                    usePlatformAuth: true
                });
            };


            return {
                setOptions: setOptions,
                addQuote: addQuote,
                deleteAllAsync: deleteAllAsync,
                fetch: fetch,
                getAll: getAll,
                getNotified: getNotified,
                getRandomQuote: getRandomQuote,
                sendMessage: sendMessage
            }
        })();
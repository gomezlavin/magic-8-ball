class QuestionsController < ApplicationController

  def index

  end

  def create
    question = params[:question]
    Question.create(text: question)
    a = Answer.all.sample
    render json: a
  end

end
